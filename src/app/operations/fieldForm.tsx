"use client";

import { Card } from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { type UseFormReturn } from "react-hook-form";
import { type OperationFormType } from "./editOperation";
import { type Operation } from "~/store/types";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { ChevronsDown } from "lucide-react";
import DateFieldForm from "./fields/dateFieldForm";

interface Props {
  form: UseFormReturn<OperationFormType>;
  field: Operation["fields"][number];
  index: number;
}

const FieldForm = ({ field, form, index }: Props) => {
  console.log("field", field);
  return (
    <Card key={field.path} className="flex flex-col gap-2">
      <div className="flex items-center justify-between px-3 py-2">
        <div>{field.path}</div>
        <FormField
          control={form.control}
          name={`fields.${index}.isIncluded`}
          render={({ field }) => (
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
      </div>

      <Collapsible
        open={form.watch(`fields.${index}.isIncluded`)}
        className="px-3"
      >
        <CollapsibleContent>
          <FormField
            control={form.control}
            name={`fields.${index}.label`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Collapsible className="py-3">
            <CollapsibleTrigger className="group flex w-full items-center justify-center gap-2 text-neutral-300">
              <span className="text-sm">
                <span className="transition group-data-[state='open']:hidden">
                  show options
                </span>
                <span className="transition group-data-[state='closed']:hidden">
                  hide options
                </span>
              </span>
              <ChevronsDown className="size-4 text-center transition group-data-[state='open']:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              {"format" in field &&
                field.params &&
                "encoding" in field.params && (
                  <DateFieldForm
                    form={form}
                    dateParams={field.params}
                    index={index}
                  />
                )}
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
export default FieldForm;
