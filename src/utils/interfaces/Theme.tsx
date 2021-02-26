export interface Theme {
  name: string
  components?: {
    header?: {
      height?: string
      width?: string
      background?: string
      color?: string
    }
    nav?: {
      color?: string
    }
    toggle?: {
      background?: string
      color?: string
    }
    link?: {
      color?: string
      textDecoration?: string
    }
  }
}