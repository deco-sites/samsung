import type { h } from "preact";
import Alert from "$components/Alert.tsx";
// import StoreLogo from "$components/icons/StoreLogo.tsx";
import Searchbar, {
  Props as SearchbarProps,
} from "$components/search/Searchbar.tsx";
import Icon from "$components/ui/Icon.tsx";

import CartButton from "../islands/CartButton.tsx";
import CartModal from "../islands/CartModal.tsx";
import NewSearch from "../islands/NewSearch.tsx";

import type { NavItem as Item } from "$components/header/NavItem.ts";

const item: Item[] = [
  {
    label: "Masculino",
    href: "/masculino",
    children: [
      { label: "Polos", href: "/masculino/polos" },
      { label: "Shorts", href: "/masculino/shorts" },
    ],
  },
  {
    label: "Feminino",
    href: "/feminino",
    children: [
      { label: "Roupas", href: "/feminino/roupas" },
    ],
  },
  {
    label: "Brindes",
    href: "/brindes",
    children: [],
  },
];

function NavItem({
  href,
  children,
}: h.JSX.HTMLAttributes<HTMLLIElement>) {
  return (
    <a
      href={href ?? `/search?ft=${children}`}
      class="flex items-center text-[15px] font-bold px-8 lg:px-6"
    >
      <span class="hover:border-black border-solid border-b border-white">
        {children}
      </span>
    </a>
  );
}

export interface NavProps{
  items: Item[];
}

function Navbar({items} : NavProps) {
  return (
    <>
      {/* Mobile Version */}
      <section class="md:hidden flex justify-between items-center p-2">

        <a href="/" class="block max-w-[10rem]">
          <img src="/logo.png" alt="Logo Samsung" />
        </a>
        <div class="flex justify-end">

        <NewSearch />

          <CartButton />

          <button
          aria-label="open menu"
          class="flex items-center justify-center h-12 w-12"
          >
            <Icon id="Bars3" className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Desktop Version */}
      <section class="hidden md:flex bg-white flex-row h-[80px] items-center md:border-b border-[#d3d5db] mx-8">
        <a href="/" class="block min-w-[12rem] max-w-[14rem] p-3">
          <img src="/logo.png" alt="Logo Samsung" />
        </a>
        <div class="flex justify-center md:justify-between pl-12 h-14">
          {items.map((item) => <NavItem {...item} />)}
        </div>
        <div class="flex-1 flex items-center justify-end gap-6">
          <NewSearch />
          <CartButton />
        </div>
      </section>
    </>
  );
}

export interface Props {
  navItems?: Item[];
}

function Header({navItems = item }: Props) {
  return (
    <header class="max-w-[1440px] m-auto">
      <Navbar items={navItems} />
      <CartModal />
    </header>
  );
}

export default Header;
