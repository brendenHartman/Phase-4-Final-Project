"""created initial table structure

Revision ID: 978f767d0e6d
Revises: 
Create Date: 2024-06-14 14:26:48.473526

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '978f767d0e6d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('car_meets',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(), nullable=True),
    sa.Column('start_date', sa.String(), nullable=True),
    sa.Column('end_date', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('drivers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('color', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cars',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('make', sa.String(), nullable=True),
    sa.Column('model', sa.String(), nullable=True),
    sa.Column('type', sa.String(), nullable=True),
    sa.Column('driver_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['driver_id'], ['drivers.id'], name=op.f('fk_cars_driver_id_drivers')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('spots',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('grade', sa.Integer(), nullable=True),
    sa.Column('driver_id', sa.Integer(), nullable=True),
    sa.Column('car_meet_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['car_meet_id'], ['car_meets.id'], name=op.f('fk_spots_car_meet_id_car_meets')),
    sa.ForeignKeyConstraint(['driver_id'], ['drivers.id'], name=op.f('fk_spots_driver_id_drivers')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('spots')
    op.drop_table('cars')
    op.drop_table('drivers')
    op.drop_table('car_meets')
    # ### end Alembic commands ###
