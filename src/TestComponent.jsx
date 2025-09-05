import React from 'react';
import { Button } from '../design-system/components/Button.jsx';
import { Input } from '../design-system/components/Input.jsx';

const TestComponent = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">设计系统测试</h1>
      <Button>测试按钮</Button>
      <Input placeholder="测试输入框" />
      <p className="text-gray-600">如果您能看到这个页面，说明设计系统工作正常！</p>
    </div>
  );
};

export default TestComponent;
