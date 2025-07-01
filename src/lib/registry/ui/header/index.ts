import Root from './header.svelte';
import Container from './header-container.svelte';
import Brand from './header-brand.svelte';
import Nav from './header-nav.svelte';
import Actions from './header-actions.svelte';
import MobileButton from './header-mobile-button.svelte';
import Spacer from './header-spacer.svelte';

const Header = Object.assign(Root, {
  Container,
  Brand,
  Nav,
  Actions,
  MobileButton,
  Spacer,
});

export {
  Header,
  Root,
  Container,
  Brand,
  Nav,
  Actions,
  MobileButton,
  Spacer,
  //
  Container as HeaderContainer,
  Brand as HeaderBrand,
  Nav as HeaderNav,
  Actions as HeaderActions,
  MobileButton as HeaderMobileButton,
  Spacer as HeaderSpacer,
};

export default Header;

export type { HeaderProps } from './header.svelte';
export type { HeaderContainerProps } from './header-container.svelte';
export type { HeaderBrandProps } from './header-brand.svelte';
export type { HeaderNavProps } from './header-nav.svelte';
export type { HeaderActionsProps } from './header-actions.svelte';
export type { HeaderMobileButtonProps } from './header-mobile-button.svelte';
export type { HeaderSpacerProps } from './header-spacer.svelte';
