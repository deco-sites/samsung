export interface NavItem {
    label: string;
    href: string;
    children?: Array<{
      label?: string;
      href?: string;
      childrenOfChildren?: Array<{
        label?: string;
        href?: string;
      }>;
    }>;
  }
  