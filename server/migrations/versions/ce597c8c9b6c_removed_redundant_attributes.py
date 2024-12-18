"""removed redundant attributes

Revision ID: ce597c8c9b6c
Revises: 6fb3d677f59b
Create Date: 2024-10-30 10:25:12.914202

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ce597c8c9b6c'
down_revision = '6fb3d677f59b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('spots', schema=None) as batch_op:
        batch_op.drop_column('reserved')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('spots', schema=None) as batch_op:
        batch_op.add_column(sa.Column('reserved', sa.BOOLEAN(), nullable=True))

    # ### end Alembic commands ###
