import styled from "styled-components/macro";

export const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  @media (min-width: 992px) {
    padding: 10px 0;
  }
`;

export const LogoDiv = styled.div`
  width: 180px;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const MenuWrapper = styled.nav`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;

export const MenuList = styled.ul`
  display: ${prop => prop.level_0 ? "flex" : "none"};
  flex-direction: ${prop => prop.level_0 ? "row" : "column"};
  padding: 10px 0;
`;

export const MenuItem = styled.li`

`;

export const MenuButton = styled.div`
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const PhoneButton = styled.div`
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const MobileMenuWrapper = styled.nav`
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-bottom: 0;
`;

export const MobileMenuItem = styled.li`
  padding-left: 0;
  padding-right: 0;
`;
