import React, { useMemo } from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Button } from '@app/components/Button';
import { checkField, required } from '@app/utils/validations';
import { SelectField } from '@app/components/CustomField/SelectField';
import { InputField } from '@app/components/CustomField/InputField';
import { CheckboxField } from '@app/components/CustomField/CheckboxField';
import { documentsType } from './data';
import { Box, FieldWrapper, Form } from './styled';

const LoginForm = ({
  handleSubmit
}) => {
  const validateDocumentType = useMemo(() => ([required('Debe seleccionar una opción')]), []);
  const validateRequiredNumber = useMemo(() => ([required('*Es necesario que ingreses tu Nro. de documento')]), []);
  const validateRequiredPhone = useMemo(() => ([required('*Es necesario que ingreses tu número de celular')]), []);
  const validateTerms = useMemo(() => ([checkField('Debe aceptar términos y condiciones')]), []);
  const validatePolicy = useMemo(() => ([checkField('Debe aceptar política comerciales')]), []);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FieldWrapper>
        <Field
          id="documentType"
          name="documentType"
          label="DNI"
          component={SelectField}
          listOptions={documentsType}
          keyOption="id"
          valueOption="id"
          labelOption="name"
          sx={{ width: 140 }}
          validate={validateDocumentType}
        />
        <Field
          id="documentNumber"
          name="documentNumber"
          label="Nro. de documento"
          component={InputField}
          variant="outlined"
          sx={{ width: 212 }}
          validate={validateRequiredNumber}
          normalize={(val) => val.replace(/[^\d]/g, '')}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Field
          id="phone"
          name="phone"
          label="Celular"
          placeholder="Celular"
          component={InputField}
          variant="outlined"
          sx={{ width: '100%' }}
          validate={validateRequiredPhone}
          normalize={(val) => val.replace(/[^\d]/g, '')}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Field
          id="termsAndConditions"
          name="termsAndConditions"
          component={CheckboxField}
          label="Acepto la Política de Privacidad"
          validate={validateTerms}
        />
      </FieldWrapper>
      <FieldWrapper className="b-field-wrapper--margin">
        <Field
          id="acceptPolicy"
          name="acceptPolicy"
          component={CheckboxField}
          label="Acepto la Política Comunicaciones Comerciales"
          validate={validatePolicy}
        />
      </FieldWrapper>
      <div>
        <a>Aplican Términos y Condiciones.</a>
      </div>
      <Button
        text="Cotiza aquí"
        variant="contained"
        color="primary"
        sx={{ width: 195, height: 64 }}
        type="submit"
      />
    </Form>
  )
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  form: ownProps.name,
  destroyOnUnmount: true,
  enableReinitialize: !!ownProps.destroyOnUnmount,
  keepDirtyOnReinitialize: !ownProps.destroyOnUnmount,
  forceUnregisterOnUnmount: !ownProps.destroyOnUnmount
});

export default connect(mapStateToProps)(reduxForm()(LoginForm));
