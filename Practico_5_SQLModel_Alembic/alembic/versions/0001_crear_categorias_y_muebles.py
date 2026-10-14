"""Crear tablas iniciales de categorías y muebles.

Revision ID: 0001_inicial
Revises:
Create Date: 2026-10-14
"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = "0001_inicial"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "categorias",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("nombre", sa.String(length=40), nullable=False),
        sa.Column("descripcion", sa.String(length=200), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("nombre"),
    )
    op.create_index(op.f("ix_categorias_nombre"), "categorias", ["nombre"], unique=False)

    op.create_table(
        "muebles",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("nombre", sa.String(length=50), nullable=False),
        sa.Column("precio", sa.Float(), nullable=False),
        sa.Column("stock", sa.Integer(), nullable=False),
        sa.Column("categoria_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(["categoria_id"], ["categorias.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_muebles_categoria_id"), "muebles", ["categoria_id"], unique=False)
    op.create_index(op.f("ix_muebles_nombre"), "muebles", ["nombre"], unique=False)


def downgrade() -> None:
    op.drop_index(op.f("ix_muebles_nombre"), table_name="muebles")
    op.drop_index(op.f("ix_muebles_categoria_id"), table_name="muebles")
    op.drop_table("muebles")
    op.drop_index(op.f("ix_categorias_nombre"), table_name="categorias")
    op.drop_table("categorias")
