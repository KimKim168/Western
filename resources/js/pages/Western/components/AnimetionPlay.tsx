import { Play } from 'lucide-react';
import styled from 'styled-components';

const AnimetionPlay = () => {
  return (
    <StyledWrapper>
      <button type="button" className="button group">
        <Play className="icon fill-white text-white" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    /* 🔹 Default (mobile – SMALL) */
    width: 40px;
    height: 40px;

    border-radius: 100%;
    border: 0;
    cursor: pointer;
    color: #fff;

    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(6px);

    transition: all 0.3s ease-in-out;
    box-shadow: rgba(193, 244, 246, 0.698) 0 0 0 0;
    animation: pulse 1.2s cubic-bezier(0.8, 0, 0, 1) infinite;
  }

  /* 🔹 Desktop size */
  @media (min-width: 768px) {
    .button {
      width: 64px;
      height: 64px;
    }
  }

  .button:is(:hover, :focus) {
    transform: scale(1.15);
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    .icon {
      width: 28px;
      height: 28px;
    }
  }

  @keyframes pulse {
    100% {
      box-shadow: 0 0 0 15px rgba(193, 244, 246, 0);
    }
  }
`;

export default AnimetionPlay;
