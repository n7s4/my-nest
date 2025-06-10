import { Test, TestingModule } from '@nestjs/testing';
import { AppController, TestController } from './app.controller';
import { AppService, TestService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

// 这里看起来是一个路由的测试用例
describe('TestController', () => {
  let testController: TestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      providers: [TestService],
    }).compile();

    testController = app.get<TestController>(TestController);

    describe('root', () => {
      it('should return "Test"', () => {
        expect(testController.getTest()).toBe('Test');
      });
    });
  });
});
