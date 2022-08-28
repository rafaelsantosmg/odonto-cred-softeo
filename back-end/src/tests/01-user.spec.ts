import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import api from '../api/api';
import User from '../database/models/user';
import { userFindOne } from './mocks/userMock';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa as rotas de Users', () => {
  let chaiHttpResponse: Response;
  describe('Testa a requisição da rota "/users"', () => {
    describe('Testa se a requisição de criar Usuário foi success', () => {
      before(async () => {
        sinon.stub(User, 'findOne').resolves(null);
        sinon.stub(User, 'create').resolves(userFindOne as User);
      });

      after(() => {
        (User.findOne as sinon.SinonStub).restore();
        (User.create as sinon.SinonStub).restore();
      });

      it('Testa se User foi feito com sucesso!', async () => {
        chaiHttpResponse = await chai.request(api).post('/users').send({
          username: 'Erika',
          email: 'erika@odontolab.com.br',
          password: '--@65erika@99--',
        });

        expect(chaiHttpResponse.status).to.be.equal(201);
        expect(chaiHttpResponse.body.message).to.be.equal('Success');
      });
    });

    describe('Testa se a requisição de criar Usuário foi success', () => {
      before(async () => {
        sinon.stub(User, 'findOne').resolves(userFindOne as User);
        sinon.stub(User, 'create').resolves(userFindOne as User);
      });

      after(() => {
        (User.findOne as sinon.SinonStub).restore();
        (User.create as sinon.SinonStub).restore();
      });

      it('Testa se não é possivel criar um usuário que ja exista!', async () => {
        chaiHttpResponse = await chai.request(api).post('/users').send({
          username: 'Erika',
          email: 'erika@odontolab.com.br',
          password: '--@65erika@99--',
        });

        expect(chaiHttpResponse.status).to.be.equal(409);
        expect(chaiHttpResponse.body.message).to.be.equal('Conflict');
      });
    });

    describe('Testa se a requisição foi feita com dados inválidos', () => {
      before(async () => {
        sinon.stub(User, 'findOne').resolves(null);
      });

      after(() => {
        (User.findOne as sinon.SinonStub).restore();
      });

      it('Testa se usuario é not found e status é 400', async () => {
        chaiHttpResponse = await chai
          .request(api)
          .post('/users')
          .send({ email: 'an@admin.com', password: '--@65erika@99--' });

        expect(chaiHttpResponse.status).to.be.equal(400);
      });

      it('Testa se password é incorrect e status é 400', async () => {
        chaiHttpResponse = await chai
          .request(api)
          .post('/users')
          .send({ email: 'erika@odontolab.com.br', password: 'admin' });

        expect(chaiHttpResponse.status).to.be.equal(400);
      });

      it('Testa se não for passado email o status é 400', async () => {
        chaiHttpResponse = await chai
          .request(api)
          .post('/users')
          .send({ password: 'admin' });

        expect(chaiHttpResponse.status).to.be.equal(400);
      });

      it('Testa se não for passado password o status é 400', async () => {
        chaiHttpResponse = await chai
          .request(api)
          .post('/users')
          .send({ email: 'erika@odontolab.com.br' });

        expect(chaiHttpResponse.status).to.be.equal(400);
      });
    });
  });
});
