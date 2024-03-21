import React from 'react';
import { useNavigate } from 'react-router-dom';
import { icons } from '@app/assets/icons';
import { Icon } from '@app/components/Icon';
import { GoBackWrapper } from './styled';

interface Props {
  url: string;
}

export const GotoBack = ({ url }: Props) => {
  const navigate = useNavigate();

  const handleGoToBack = () => {
    navigate(url);
  };

  return (
    <GoBackWrapper onClick={handleGoToBack}>
      <div>
        <Icon icon={icons.back} size="20px" />
      </div>
      <span>Volver</span>
    </GoBackWrapper>
  );
}

