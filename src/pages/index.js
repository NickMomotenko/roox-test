import React from "react";

import Label from "../components/Label";

import FormContainer from "../components/UI/FormContainer";
import Title from "../components/UI/Title";
import Button from "../components/UI/Button";

import { useInput } from "../hooks/useInput";
import { DataContext } from "../context/DataContext";

const Form = () => {
  const name = useInput();
  const userName = useInput();
  const email = useInput();
  const street = useInput();
  const city = useInput();
  const zipCode = useInput();
  const phone = useInput();
  const website = useInput();
  const comment = useInput();

  const labelList = [
    { id: 1, label: "Name", hookValue: name, placeholder: "Иван Иванов" },
    { id: 2, label: "email", hookValue: email, placeholder: "Ivan" },
    {
      id: 3,
      label: "User Name",
      hookValue: userName,
      placeholder: "test@mail.ru",
    },
    { id: 4, label: "Street", hookValue: street, placeholder: "ул.Пример" },
    { id: 5, label: "City", hookValue: city, placeholder: "Москва" },
    { id: 6, label: "Zip Code", hookValue: zipCode, placeholder: "4124214" },
    { id: 7, label: "Phone", hookValue: phone, placeholder: "21421422144" },
    { id: 8, label: "Website", hookValue: website, placeholder: "www.ex.com" },
    { id: 9, label: "Comment", hookValue: comment, placeholder: "" },
  ];

  const [isEdit, setIsEdit] = React.useState(false);

  const { users } = React.useContext(DataContext);

  return (
    <div className="form-page">
      <div className="form-page__row">
        <Title text="Профиль пользоваетля" />
        <Button text="Редактировать" />
      </div>
      <FormContainer>
        {labelList.map((item) => (
          <Label key={item.id} isEdit={isEdit} {...item} />
        ))}
        <Button text="Отправить" />
      </FormContainer>
    </div>
  );
};

export default Form;
