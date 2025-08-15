"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { useState } from "react";
import {useForm } from "react-hook-form";
import {z} from "zod"

const formSchema = z.object({
    title: z.string().min(1, { message: "Title must be at least 1 character long" }),
    description: z.string().min(10, { message: "Description must be at least 10 characters long" }).max(1000),
    location: z.string().min(2, { message: "Location must be at least 2 characters long" }).max(100),
    company: z.string().min(2, { message: "Company must be at least 2 characters long" }).max(100),
    salary: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

const CreateJobPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            location: "",
            company: "",
            salary: ""
        }
    });
    const {isSubmitting, isValid} = form.formState
    const onSubmit = async (data: FormData) => {
        const processedData = {
            ...data,
            salary: data.salary ? Number(data.salary) : undefined
        };
        console.log("Form Data:", processedData);
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-2">Create a New Job</h1>
                <p className="text-sm text-neutral-500">What would you like to name your job? Don&apos;t worry, you can change it later.</p>
           {/* form */}
           <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField name="title" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                        <Input
                        disabled ={isSubmitting}
                        placeholder ="e.g Full Stack Developer"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="description" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Description</FormLabel>
                    <FormControl>
                        <Input
                        disabled ={isSubmitting}
                        placeholder ="Describe the job responsibilities and requirements"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="location" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Job Location</FormLabel>
                        <FormControl>
                            <Input
                                disabled={isSubmitting}
                                placeholder="e.g. Remote"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField name="company" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                            <Input
                                disabled={isSubmitting}
                                placeholder="e.g. ABC Corp"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField name="salary" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Salary</FormLabel>
                        <FormControl>
                            <Input
                                disabled={isSubmitting}
                                placeholder="e.g. 60000"
                                type="number"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
               <div className="flex items-center gap-x-2 pt-4">
                <Link href={"/"}>
                <Button variant={"ghost"} type="button">
                    Cancel
                </Button>
                </Link>
                <Button type="submit" disabled={!isValid || isSubmitting} className="bg-purple-600 text-white hover:bg-purple-700">
                    Create Job
                </Button>
               </div>
               </form>
           </Form>
            </div>
        </div>
    );
}

export default CreateJobPage;