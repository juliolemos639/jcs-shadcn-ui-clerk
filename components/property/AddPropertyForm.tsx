"use client";

import { Property } from "@prisma/client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import { UploadButton } from "@/components/uploadthing";

const formSchema = z.object({
  typeProperty: z.string().min(3, { message: "Mínimo de 3 caracteres" }),
  typeDeal: z
    .string()
    .min(4, { message: "Tipo de propriedade deve ter no mínimo 4 caracteres" }),
  title: z
    .string()
    .min(3, { message: "Título deve ter ao mínimo 3 caracteres" }),
  description: z
    .string()
    .min(10, { message: "Descrição dever ter pelo menos dez caracteres" }),
  coverImage: z.string().min(1, { message: "Foto da capa é obrigatória" }),
  image: z
    .string()
    .min(1, { message: "Pelo menos alguma foto adicional é obrigatória" }),
  state: z.string().min(2, { message: "Estado dever ter 2 caracteres" }),
  county: z
    .string()
    .min(4, { message: "Município dever ter pelo menos 4 caracteres" }),
  neighborhood: z
    .string()
    .min(4, { message: "Bairro dever ter pelo menos 4 caracteres" }),
  address: z
    .string()
    .min(5, { message: "Descrição dever ter pelo menos 5 caracteres" }),
  bedrooms: z.string().min(1, {
    message: "Quantidade de quartos dever ter pelo menos 1 caracter",
  }),
  bathrooms: z.string().min(1, {
    message: "Quantidade de banheiros dever ter pelo menos 1 caracter",
  }),
  surface: z.string().min(1, {
    message: "Metragem da propriedade dever ter pelo menos 1 caracter",
  }),
  price: z
    .string()
    .min(4, { message: "Valor dever ter pelo menos 4 caracter" }),
  locationDescription: z.string().optional(),
  gym: z.boolean().optional(),
  spa: z.boolean().optional(),
  bar: z.boolean().optional(),
  laundry: z.boolean().optional(),
  restaurant: z.boolean().optional(),
  shopping: z.boolean().optional(),
  freeParking: z.boolean().optional(),
  bikeRental: z.boolean().optional(),
  freeWifi: z.boolean().optional(),
  swimmingPool: z.boolean().optional(),
  coffeShop: z.boolean().optional(),
  internetRoom: z.boolean().optional(),
});

const AddPropertyForm = ({ property }: any) => {
  const [coverImage, setCoverImage] = useState<string | undefined>(
    property?.coverImage
  );

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeProperty: "",
      title: "",
      description: "",
      coverImage: "",
      state: "",
      county: "",
      neighborhood: "",
      address: "",
      bedrooms: "",
      bathrooms: "",
      surface: "",
      price: "",
      locationDescription: "",
      gym: false,
      spa: false,
      bar: false,
      laundry: false,
      restaurant: false,
      shopping: false,
      freeParking: false,
      bikeRental: false,
      freeWifi: false,
      swimmingPool: false,
      coffeShop: false,
      internetRoom: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="text-lg font-semibold">
            {property ? "Atualize o imóvel" : "Descreva o imóvel"}
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-6">
              {/* <FormField
                control={form.control}
                name="typeProperty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imóvel</FormLabel>
                    <FormControl>
                      <Input placeholder="Casa/Apartamento/Loja" {...field} />
                    </FormControl>
                    <FormDescription>Informe o tipo de imóvel.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <FormField
                control={form.control}
                name="typeProperty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Aluguel/Venda/Ambos</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a opção do Imóvel" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="rent">Aluguel</SelectItem>
                        <SelectItem value="sale">Venda</SelectItem>
                        <SelectItem value="both">Ambos</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Informe a opção do Imóvel</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="typeProperty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imóvel</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo de imóvel" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="apartamento">Apartamento</SelectItem>
                        <SelectItem value="casa">Casa</SelectItem>
                        <SelectItem value="chacara">Chácara</SelectItem>
                        <SelectItem value="loja">Loja</SelectItem>
                        <SelectItem value="kitinet">Kitinet</SelectItem>
                        <SelectItem value="terreno">Terreno</SelectItem>
                        <SelectItem value="predio">Prédio</SelectItem>
                        <SelectItem value="sitio">Sítio</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Informe o tipo de Imóvel</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input placeholder="Título do imóvel" {...field} />
                    </FormControl>
                    <FormDescription>
                      Informe o título para o imóvel.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição do Imóvel</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Este imóvel possui imensas facilidades..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Informe uma descrição para o imóvel.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 items-center gap-6">
                <FormField
                  control={form.control}
                  name="bedrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qtd Quartos</FormLabel>
                      <FormControl>
                        <Input placeholder="99" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bathrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qtd Banheiros</FormLabel>
                      <FormControl>
                        <Input placeholder="99" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="surface"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Metragem</FormLabel>
                      <FormControl>
                        <Input placeholder="9999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Valor</FormLabel>
                      <FormControl>
                        <Input placeholder="99999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormLabel>Informe as facilidades</FormLabel>
                <FormDescription>
                  Marque as facilidades do Imóvel
                </FormDescription>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <FormField
                    control={form.control}
                    name="gym"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Academia</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="spa"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Spa</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bar"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Bar</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="laundry"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Lavanderia</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="restaurant"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Restaurante</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shopping"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Shopping</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="freeParking"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Garagem</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bikeRental"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Aluguel de Bikes</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="freeWifi"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Wifi Gratuito</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="swimmingPool"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Piscina</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="coffeShop"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Cafeteria</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="internetRoom"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Sala de Internet</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              {/* <FormField
              control={form.control}
              name='coverImage'
              render={({field})=> (
                <FormItem className="flex flex-col space-y-3">
                  <FormLabel>Imagem de Capa</FormLabel>
                  <FormDescription>Escolha uma foto que melhor represente o imóvel</FormDescription>
                  <FormControl>
  {
    coverImage ? <></> 
    : 
    <>
    <div className="flex flex-col items-center max-w-[400px] p-12 border-2 border-dashed border-primary/50">
    <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        />
        </div>
    </>
  }
</FormControl>
                </FormItem>
              )}
              /> */}
            </div>
            <div className="flex-1 flex flex-col gap-6">parte 2</div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddPropertyForm;
