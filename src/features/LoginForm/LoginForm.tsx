import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input, Typography } from '../../shared/ui';
import { LoginFormFields } from './lib';

const LoginForm: FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
    setIsDisabled(true);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex flex-col gap-2 mb-4">
        {errors.login && errors.login.type === 'required' && (
          <Typography variant="Body" weight="medium" className="text-red-500">
            Login is required
          </Typography>
        )}
        <Controller
          name="login"
          rules={{
            required: true,
          }}
          control={control}
          render={({ field }) => (
            <Input value={field.value} onChange={field.onChange} placeholder="Логин" type="email" />
          )}
        />
        {errors.password && errors.password.type === 'required' && (
          <Typography variant="Body" weight="medium" className="text-red-500">
            Password is required
          </Typography>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <Typography variant="Body" weight="medium" className="text-red-500">
            Min length is 6 characters
          </Typography>
        )}
        <Controller
          name="password"
          rules={{
            required: true,
            minLength: 6,
          }}
          control={control}
          render={({ field }) => (
            <Input
              value={field.value}
              onChange={field.onChange}
              placeholder="Пароль"
              type="password"
              isPassword
            />
          )}
        />
      </div>
      <Button color="inverted" disabled={isDisabled}>
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
