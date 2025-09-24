import React from "react";
import styled from "styled-components";

interface SwitchProps {
  className?: string;
  size?: "xl" | "lg" | "md" | "sm"; // optional manual size
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const sizes = { xl: 1.2, lg: 0.9, md: 0.7, sm: 0.5 };

const Switch: React.FC<SwitchProps> = ({
  className,
  size = "lg",
  checked,
  defaultChecked,
  onChange,
}) => {
  return (
    <StyledWrapper className={className} $size={sizes[size]}>
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $size: number }>`
  .switch {
    font-size: ${({ $size }) => 17 * $size}px;
    position: relative;
    display: inline-block;
    width: ${({ $size }) => 3.5 * $size}em;
    height: ${({ $size }) => 2 * $size}em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    --background: #28096b;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    transition: 0.5s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: ${({ $size }) => 1.4 * $size}em;
    width: ${({ $size }) => 1.4 * $size}em;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px #fff000;
    background: var(--background);
    transition: 0.5s;
  }

  input:checked + .slider {
    background-color: #522ba7;
  }

  input:checked + .slider:before {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #fff000;
  }

  /* 📱 Responsive scaling */
  @media (max-width: 480px) {
    .switch {
      font-size: ${({ $size }) => 14 * $size}px;
      width: ${({ $size }) => 3 * $size}em;
      height: ${({ $size }) => 1.6 * $size}em;
    }
    .slider:before {
      height: ${({ $size }) => 1.2 * $size}em;
      width: ${({ $size }) => 1.2 * $size}em;
    }
  }

  @media (min-width: 768px) {
    .switch {
      font-size: ${({ $size }) => 16 * $size}px;
      width: ${({ $size }) => 3.5 * $size}em;
      height: ${({ $size }) => 1.9 * $size}em;
    }
    .slider:before {
      height: ${({ $size }) => 1.6 * $size}em;
      width: ${({ $size }) => 1.6 * $size}em;
    }
  }
`;

export default Switch;
