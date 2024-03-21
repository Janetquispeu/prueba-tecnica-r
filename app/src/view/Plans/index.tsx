import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { images } from '@app/assets/images';
import { fetchUser } from '@app/view/slices/user/service';
import { selectUser } from '@app/view/slices/user';
import { fetchPlans } from '@app/view/slices/plans/service';
import { selectPlans } from '@app/view/slices/plans';
import { GotoBack } from '../components/GoToBack';
import { Card } from './components/cards';
import { PlanCard } from './components/PlanCard';
import { data } from './data';
import { PlanResponse, UserResponse } from './model';
import {
  BoxWrapper,
  CardWrapper,
  LayoutContent,
  PlanCardWrapper,
  PlansStyle
} from './styled';

export const Plans = () => {
  const FOR_ANOTHER_PERSON = 'forAnotherPerson';
  const dispatch = useDispatch<any>();
  const user: UserResponse = useSelector(selectUser);
  const plan: PlanResponse = useSelector(selectPlans);
  const [userAge, setUserAge] = useState<number>(0);
  const [planFilter, setPlanFilter] = useState([]);
  const [applyDiscount, setApplyDiscount] = useState(false);
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let discount = false;
    const newPlans = [...plan.data].filter((item) => (userAge <= item.age));

    if (event.target.value === FOR_ANOTHER_PERSON) {
      discount=true;
    }

    setApplyDiscount(discount);
    setPlanFilter(newPlans);
    setSelectedValue(event.target.value);
  };

  const getAgeUser = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    const age = today.getFullYear() - birthDate.getFullYear();

    setUserAge(age);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    if (user.fetch) {
      getAgeUser(user.data.birthDay)
      dispatch(fetchPlans());
    }
  }, [user.fetch]);

  return user.fetch && (
    <PlansStyle>
      <LayoutContent>
        <div>
          <GotoBack url="/" />
          <BoxWrapper>
            <div className="b-person">
              <h2>{user.data.name} ¿Para quién deseas cotizar?</h2>
              <p>Selecciona la opción que se ajusta más a tus necesidades.</p>
            </div>
            <CardWrapper>
              <Card
                image={images.forMe}
                title="Para mí"
                onChange={handleChange}
                selectedValue={selectedValue}
                value="forMe"
                text="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              />
              <Card
                image={images.forAnotherPerson}
                title="Para alguien más"
                onChange={handleChange}
                selectedValue={selectedValue}
                value="forAnotherPerson"
                text="Realiza una cotización para uno de tus familiares o cualquier persona."
              />
            </CardWrapper>
            {Boolean(planFilter.length) && (
              <PlanCardWrapper>
                {planFilter.map((item) => (
                  <PlanCard
                    key={item.name}
                    image={data[item.age].image}
                    item={item}
                    tag={data[item.age].tag}
                    user={user.data}
                    applyDiscount={applyDiscount}
                  />
                ))}
              </PlanCardWrapper>
            )}
          </BoxWrapper>
        </div>
      </LayoutContent>
    </PlansStyle>
  );
};
