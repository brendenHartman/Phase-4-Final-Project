"""fixes  R - r typo

Revision ID: 7c85d322505c
Revises: 6d68a1267e56
Create Date: 2024-08-22 18:32:50.435280

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7c85d322505c'
down_revision = '6d68a1267e56'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('drivers', schema=None) as batch_op:
        batch_op.create_unique_constraint('email', ['email'])
        batch_op.create_unique_constraint('username', ['username'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('drivers', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_constraint(None, type_='unique')

    # ### end Alembic commands ###
