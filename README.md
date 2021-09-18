## API de autenticação Rails com devise-token-auth

|    Versões    |
|---------------|
| Ruby 2.7.4    |
| Rails 6.1.4   |
| Postgresql 13 |

### Funcionalidade

1. Criar usuários com e-mail de confirmação;
2. Login/Logout;
3. Alterar senha baseado em informações enviadas por e-mail;
4. Alterar informações do usuário;
5. Deletar usuários;
6. Criar, visualisar, editar e remover artigos do usuário logado;

### Instalação

`$ git clone https://github.com/jkayro/blog-auth-api.git`

`$ cd rails-blog-api`

`$ bundler install`

`$ rails db:create`

`$ rails db:migrate`

.