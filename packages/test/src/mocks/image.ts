type Status = "loaded" | "error"

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
    simulate(value: Status) {
      status = value
    },

    restore() {
      window.Image = originalImage
    },
  }
}

image.restore = function () {
  window.Image = originalImage
}

image.DELAY = 100
