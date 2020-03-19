# SRL - Sistema de Reserva de Locais do IFES
> Projeto da disciplina de Laboratório de Engenharia de Software do Prof. Rafael Vargas com o nome de SRL - Sistema de gerenciamente de Reservas de Locais do IFES.

SRL – Sistema de Reserva de Locais que como objetivo gerenciar o uso dos locais públicos do IFES Campus Cachoeiro de Itapemirim, reservando sistemicamente o local com uma data de inicio e fim do evento, gerando notificações para o responsável do local e para os solicitantes e participantes do evento, assim evitando conflitos de horário e ociosidade do local.  

## Manutenção de Cadastros

```
* Responsável
* Solicitante / Organizador
* Participante
* Local
* Produto (Equipamentos / Serviços)
* Evento
* Departamento
```

## Processos de Negócio

```
* Solicitar Reserva do Local, Equipamento / Serviço por data de Inicio e Fim
* Responsável Confirma/Rejeita uma Reserva de Local
* Criar Lista de Presença da Reserva com status de Presente / Ausente
* Enviar Notificação da Reserva para o Responsável e Solicitante
* Listar Locais Disponíveis e Ocupados
* Gerar Certificado Automático com Status Presente na Lista de Presença 
* Enviar Notificação para o Responsável e Solicitante ao Inserir ou Alterar uma Reserva
* Não permitir Duplicadade na Lista de Presença
* Não Permitir inserir Participante na Lista de Presença acima da capacidade do Local
```

## Relatórios

```
* Relação de Locais Ocupados e Disponíveis por data
* Relação TOP 10 Locais mais utilizados por mês
* Relação TOP 10 Solicitantes de Locais por mês
* Relação de Reservas em aberto
* Relação de Reservas filtradas por data e local
* Lista de Presença filtrada por Reserva
* Lista de Presença % de presentes e faltantes
```

## Tecnologias Utilizadas 

```
* Java
* Spring
* Vue.js
* Brootstrap
```