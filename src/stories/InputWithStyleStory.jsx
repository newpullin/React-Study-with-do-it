import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../04/InputWithStyle';

storiesOf('InputWithStyle', module)
  .addWithJSX('기본 설정', () => <Input name="name" />)
  .addWithJSX('label 예제1', () => <Input name="name" label="이름" />)
  .addWithJSX('label 예제2', () => <Input name="name" label="이름" value="두잇" />)
  .addWithJSX('label 예제3', () => (
    <Input name="name" label="이름" errorMessage="이름을 입력해주세요" />
  ));
