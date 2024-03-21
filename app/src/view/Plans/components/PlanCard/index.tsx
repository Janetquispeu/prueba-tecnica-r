import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import { saveData } from '@app/view/slices/saveUserData';
import { Button } from '@app/components/Button';
import { Plan, User } from '../../model';
import {
  PlanCardStyle,
  PlanDescription,
  PlanType,
  PlanTitleWrapper
} from './styled';

interface Props {
  image: string;
  item: Plan;
  tag: boolean;
  user: User;
  applyDiscount: boolean;
}

export const PlanCard = ({ image, item, tag, user, applyDiscount }: Props) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleClick = () => {
    const newPrice = applyDiscount ? (item.price - (0.05 * item.price)) : item.price;

    dispatch(saveData({ data: {
      planName: item.name,
      price: newPrice,
      ...user
    }}))
    navigate('/resume');
  };

  return (
    <PlanCardStyle>
      <PlanTitleWrapper>
        {tag && <span className="b-tag">Plan Recomendado</span>}
        <PlanType>
          <span className="b-plan-type">{item.name}</span>
          <span className="b-plan-cost-text">Costo del Plan</span>
          <span className="b-plan-cost">${item.price} al mes</span>
        </PlanType>
        <div>
          <img className="b-plan-card__image" src={image} alt={image} />
        </div>
      </PlanTitleWrapper>
      <Divider />
      <PlanDescription>
        {item.description.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </PlanDescription>
      <Button
        text="Seleccionar Plan"
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ width: 224, height: 48 }}
        type="button"
      />
    </PlanCardStyle>
  );
};
