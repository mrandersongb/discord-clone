/**
 * Button Server Style definition
 */

import styled from "styled-components";

import { ButtonProps } from ".";

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50px;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ? "var(--rocketseat)" : "var(--primary)"};

  position: relative;
  cursor: pointer;

  > img {
    width: 24px;
    height: 24px;
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    border-radius: 50%;

    background-color: var(--white);

    content: "";
    display: ${(props) => (props.hasNotifications ? "inline" : "none")};
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? "inline" : "none"};
  }

  &:active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? "var(--rocketseat)" : "var(--discord)"};
  }
`;
