"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "@components/Form";

export default function CreatePrompt() {
    const [submitting, setSubmitting] = useState()

  return (
    <div>Create Prompt</div>
  )
}
