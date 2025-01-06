import React from "react";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoSchema } from "@/features/resumes/types/resumes.types";
import { z } from "zod";

export default function Page() {
  const form = useForm<z.infer<typeof InfoSchema>>({
    resolver: zodResolver(InfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data: z.infer<typeof InfoSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}></form>
    </Form>
  );
}
