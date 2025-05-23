'use client'
import {useForm, useWatch} from "react-hook-form"
import {searchSchema} from "@axonicles/zod-schemas/zodSchemas"
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod'; 
import {FormField} from "@axonicles/ui/FormField"
import {Input} from "@axonicles/ui/Input"
import { IoMdSearch } from "react-icons/io";
import useDebounce from "../../hooks/useDebounce";


export default function UserRoadmapsSearch() {
    const searchForm = useForm<z.infer<typeof searchSchema>>({
        resolver: zodResolver(searchSchema),
        defaultValues: {
            searchString: ""
        }
    })

    const searchValue = useWatch({
      control: searchForm.control,
      name: "searchString",
    });

    useDebounce({
      value: searchValue,
      interval: 500, // 500ms debounce
      callback: (debouncedVal) => {
        // API/search logic here
        console.log("Debounced search string:", debouncedVal);
      }
    });
  

  return (
    <div className="flex flex-col gap-4 mt-3">
      <form>
      <FormField
      name='searchString'
      errors={searchForm.formState.errors}
      >
        <div className="relative">
        <Input className="pl-7 pr-3" {...searchForm.register("searchString")} placeholder="Search your roadmaps..." variant="primary" />
        <span className="absolute text-gray-400 left-2 top-2"><IoMdSearch/></span>
        </div>
      </FormField>
      </form>

    </div>
  );
}