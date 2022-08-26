import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import api from '../api/api';
import User from '../database/models/user';
import { userFindOne, token } from './mocks/userMock';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

let chaiHttpResponse: Response;

describe('Testa as rotas de Login', () => {
  describe('Testa a requisição da rota "/login"', () => {
    describe('Testa se a requisição de Login foi success', () => {
      before(async () => {
        sinon.stub(User, 'findOne').resolves(userFindOne as User);
        sinon.stub(bcrypt, 'compareSync').resolves(true);
        sinon.stub(jwt, 'sign').callsFake(() => {
          return Promise.resolve(token);
        });
      });

      after(() => {
        (User.findOne as sinon.SinonStub).restore();
        (bcrypt.compareSync as sinon.SinonStub).restore();
        (jwt.sign as sinon.SinonStub).restore();
      });

      it('Testa se login foi feito com sucesso!', async () => {
        chaiHttpResponse = await chai.request(api).post('/login').send({
          email: 'erika@odontocred.com.br',
          password: '--@65erika@99--',
        });

        expect(chaiHttpResponse.status).to.be.equal(200);
        expect(chaiHttpResponse.body).have.property('username');
        expect(chaiHttpResponse.body).have.property('token');
      });
    });

    describe('Testa se a requisição foi feita com dados inválidos', () => {
      before(async () => {
        sinon.stub(User, 'findOne').resolves(null);
        sinon.stub(bcrypt, 'compareSync').resolves(true);
      });

      after(() => {
        (User.findOne as sinon.SinonStub).restore();
        (bcrypt.compareSync as sinon.SinonStub).restore();
      });

      it('Testa se usuario é não foi encontrado e status é 404', async () => {
        chaiHttpResponse = await chai
          .request(api)
          .post('/login')
          .send({ email: 'an@admin.com', password: '--@65erika@99--' });

        expect(chaiHttpResponse.status).to.be.equal(404);
        expect(chaiHttpResponse.body.message).to.be.equal('Not Found');
      });

      it('Testa se não for passado email o status é 400', async () => {
        chaiHttpResponse = await chai
          .request(api)
          .post('/login')
          .send({ password: 'admin' });

        expect(chaiHttpResponse.status).to.be.equal(400);
      });

      it('Testa se não for passado password o status é 400', async () => {
        chaiHttpResponse = await chai
          .request(api)
          .post('/login')
          .send({ email: 'erika@odontocred.com.br' });

        expect(chaiHttpResponse.status).to.be.equal(400);
      });
    });

    describe('Testa se a requisição foi feita com senha inválida', () => {
      before(async () => {
        sinon.stub(User, 'findOne').resolves(userFindOne as User);
        sinon
          .stub(bcrypt, 'compareSync')
          .callsFake((password, hashPassword) => false);
      });

      after(() => {
        (User.findOne as sinon.SinonStub).restore();
        (bcrypt.compareSync as sinon.SinonStub).restore();
      });

      it('Testa se password é inválido e status é 403', async () => {
        chaiHttpResponse = await chai.request(api).post('/login').send({
          email: 'erika@odontocred.com.br',
          password: '--@65erika@-',
        });

        expect(chaiHttpResponse.status).to.be.equal(403);
        expect(chaiHttpResponse.body.message).to.be.equal('Forbidden');
      });
    });
  });
});
