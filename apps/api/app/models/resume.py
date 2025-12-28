# apps/api/app/models/resume.py

from __future__ import annotations

from datetime import datetime, timezone
from typing import Any, Optional

from sqlalchemy import DateTime, String, Text, JSON
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Resume(Base):
    __tablename__ = "resumes"

    # Primary key (we'll generate UUIDs in the API layer or later switch to DB default)
    id: Mapped[str] = mapped_column(String, primary_key=True)

    # Handy indexed fields (fast lookups + display)
    full_name: Mapped[Optional[str]] = mapped_column(String, index=True, nullable=True)
    email: Mapped[Optional[str]] = mapped_column(String, index=True, nullable=True)

    # Template support later (v1 can just keep "classic")
    template_id: Mapped[str] = mapped_column(String, default="classic")

    # Pipeline status
    # draft -> needs_info -> generating -> generated -> error
    status: Mapped[str] = mapped_column(String, default="draft", index=True)

    # Raw intake payload from the form (required)
    intake: Mapped[dict[str, Any]] = mapped_column(JSON, nullable=False)

    # Q/A loop for "ask one question at a time"
    # Stored as an array of message objects
    conversation: Mapped[list[dict[str, Any]]] = mapped_column(JSON, default=list)

    # Claude output (ResumeData) once generated
    data: Mapped[Optional[dict[str, Any]]] = mapped_column(JSON, nullable=True)

    # Error/debugging
    error_message: Mapped[Optional[str]] = mapped_column(Text, nullable=True)

    created_at: Mapped[datetime] = mapped_column(
        DateTime, default=lambda: datetime.now(timezone.utc)
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
    )
