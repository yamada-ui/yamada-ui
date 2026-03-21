import fs from "fs";
import ora from "ora";
import rimraf from "rimraf";
import { installDependencies, writeFileSafe } from "./utils"; // your existing util
import type { UserConfig } from "./types";

export interface DryRunContext {
  dryRun: boolean;
  spinner: ora.Ora;
  log: (msg: string, prefix?: string) => void;
  fs: {
    writeFileSafe(filePath: string, content: string, config: UserConfig): Promise<void>;
    mkdir(dirPath: string): Promise<void>;
    rmrf(dirPath: string): Promise<void>;
    exists(filePath: string): boolean;
  };
  install: {
    dependencies(pkgs: string[], opts: { cwd: string; dev?: boolean }): Promise<void>;
  };
}

export function createContext(dryRun: boolean, spinner: ora.Ora): DryRunContext {
  const log = (msg: string, prefix = dryRun ? "[dry-run]" : "") => {
    const formatted = prefix ? `${prefix} ${msg}` : msg;
    spinner.info(formatted);
  };

  return {
    dryRun,
    spinner,
    log,
    fs: {
      async writeFileSafe(filePath, content, config) {
        if (this.dryRun) {
          this.log(`Would write: ${filePath}`, "[dry-run]");
          this.log(`Content preview: ${content.slice(0, 100)}...`, "[dry-run]");
          return;
        }
        await writeFileSafe(filePath, content, config);
      },
      async mkdir(dirPath) {
        if (this.dryRun) {
          this.log(`Would create dir: ${dirPath}`, "[dry-run]");
          return;
        }
        await fs.promises.mkdir(dirPath, { recursive: true });
      },
      async rmrf(dirPath) {
        if (this.dryRun) {
          this.log(`Would delete: ${dirPath}`, "[dry-run]");
          return;
        }
        await rimraf(dirrf(dirPath));
      },
      exists: fs.existsSync,
    },
    install: {
      async dependencies(pkgs, opts) {
        if (this.dryRun) {
          this.log(`Would install: ${pkgs.join(", ")} (${opts.dev ? "dev" : "prod"})`, "[dry-run]");
          return;
        }
        if (opts.dev) {
          await installDependencies(pkgs, { cwd: opts.cwd, dev: true });
        } else {
          await installDependencies(pkgs, { cwd: opts.cwd });
        }
      },
    },
  };
}
