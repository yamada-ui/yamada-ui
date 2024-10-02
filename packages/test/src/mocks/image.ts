type Status = "error" | "loaded"

const originalImage = window.Image

export function image() {
  let status: Status

  //@ts-expect-error
  window.Image = class Image {
    onload = () => {}

    onerror = () => {}

    src = ""

    alt = ""

    hasAttribute(name: string) {
      return name in this
    }

    getAttribute(name: string) {
      return name in this ? (this as any)[name] : null
    }

    constructor() {
      setTimeout(() => {
        if (status === "error") {
          this.onerror()
        } else {
          this.onload()
        }
      }, image.DELAY)
      return this
    }
  }

  return {
    restore() {
      window.Image = originalImage
    },

    simulate(value: Status) {
      status = value
    },
  }
}

image.restore = function () {
  window.Image = originalImage
}

image.DELAY = 100
