"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoSchema } from "@/features/resumes/types/resumes.types";
import { z } from "zod";

export default function UserForm() {
  const form = useForm<z.infer<typeof InfoSchema>>({
    resolver: zodResolver(InfoSchema),
    defaultValues: {
      name: "",
      lastName: "",
      jobTitle: "",
      city: "",
      country: "",
      phoneNumber: "",
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof InfoSchema>) => {
    console.log(data);
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
