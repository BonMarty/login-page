import { FC } from 'react';
import { LoginForm } from '../../features';
import { Typography } from '../../shared/ui';
import loginImageSrc from './assets/login-image.png';

const Login: FC = () => {
  return (
    <div className="flex max-h-screen overflow-hidden">
      <section className="flex-1 h-screen flex justify-center items-center p-4">
        <div className="max-w-96 w-full">
          <div className="mb-6">
            <Typography variant="Title 3" color="tertiary" weight="medium">
              Здравствуйте!
            </Typography>
            <Typography variant="Title 2" color="primary" weight="medium">
              Войдите в свой аккаунт
            </Typography>
          </div>
          <LoginForm />
        </div>
      </section>
      <section className="bg-[#E7E8EF] flex-1 h-screen flex items-end">
        <img src={loginImageSrc} alt="login image" />
      </section>
    </div>
  );
};

export default Login;
