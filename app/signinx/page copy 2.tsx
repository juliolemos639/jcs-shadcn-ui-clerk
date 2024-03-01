"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
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

export default function Signin() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().min(2, {
      message: "E-mail deve ser válido.",
    }),
    password: z.string().min(6, {
      message: "Senha deve conter ao menos 6 caracteres.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values.email, values.password);

    signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/",
    });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Entre com sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="exemplo@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input placeholder="..." {...field} />
                      </FormControl>
                      <FormDescription>
                        <div
                          onClick={() => router.push("/forgot-password")}
                          className="cursor-pointer font-semibold  hover:text-primary/70"
                        >
                          Forgot password?
                        </div>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Sign in</Button>
              </form>
            </Form>
          </div>

          <p className="mt-10 text-center text-sm">
            Não membro?{" "}
            <button
              onClick={() => router.push("signup")}
              className="font-semibold leading-6 hover:text-primary/70"
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
