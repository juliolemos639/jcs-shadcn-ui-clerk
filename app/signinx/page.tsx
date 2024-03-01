"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";

import { FcGoogle } from "react-icons/fc";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useTheme } from "next-themes";

export default function Signinx() {
  const { theme } = useTheme();
  console.log(theme);
  const formSchema = z.object({
    email: z.string().email({
      message: "Digite um email válido, ex: exemplo@gmail.com",
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

  const router = useRouter();

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
    <div className="h-screen flex items-center justify-center p-4">
      <div
        className={`grid ${
          theme === "dark" ? "box-animate" : "box-animate-light"
        } w-full h-full grid-cols-1 bg-white md:grid-cols-2`}
      >
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
          <div className="my-4">
            <h1 className="text-3xl font-semibold">Login</h1>
            <p className="mt-2 text-xs text-slate-400">
              Entre para mais acesso
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Button
                variant="outline"
                className="flex items-center gap-4 mb-4 px-12 w-full bg-transparent rounded-full"
              >
                <FcGoogle />
                Entre com google
              </Button>

              <p className="text-sm text-center">---- ou continue com -----</p>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="exemplo@gmail.com"
                        {...field}
                        className="mt-2 mb-4 bg-transparent rounded-full"
                      />
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
                    <FormLabel>Senha*</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Senha"
                        {...field}
                        className="mt-2 bg-transparent rounded-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700"
              >
                Entrar
              </Button>
            </form>
          </Form>

          {/* ----------------------------------------- */}
          {/* //------------ // Second part //------------ */}
          <p className="mt-4 text-xs text-slate-200">
            @2024 Todos os direitos reservados
          </p>
        </div>
        <div className="relative hidden md:block">
          <Image
            className="object-cover"
            fill={true}
            src="/pessoa-entrando.jpg"
            alt="Imagem JCS"
            sizes="40"
          />
        </div>
      </div>
    </div>
  );
}
