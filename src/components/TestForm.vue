<template>
  <div class="p-2">
    <FormulateForm
      v-model="formValues"
      >
      <FormulateInput
        name="inn"
        label="International nonproprietary name (INN)?"
        validation="required"
      />

      <FormulateInput
        name="drug-class"
        :options="{}"
        type="select"
        placeholder="Select an option"
        label="What is this drug's class?"
      />

      <FormulateInput
        name="tradenames"
        label="What are the drug's trade names?"
        validation="required"
      />

      <FormulateInput
        type="group"
        label="What are the drug's trade names?"
        :repeatable="true"
        name="trade-names"
        validation-name="trade-names"
        validation="min:2,length"
        add-label="+ Trade Name"
      >
        <FormulateInput
          name="trade-name"
          label="Trade Name"
          validation="required"
        />
      </FormulateInput>

      <FormulateInput
        type="image"
        name="structure"
        label="Structure image?"
        help="Select a png, jpg or gif to upload."
        validation="mime:image/jpeg,image/png,image/gif"
      />

      <FormulateInput
        type="group"
        label="What are the drug's patents?"
        :repeatable="true"
        name="patents"
        validation-name="patents"
        validation="min:2,length"
        add-label="+ Patent"
      >
        <FormulateInput
          name="patent"
          label="Patent"
          validation="required"
        />
      </FormulateInput>

      <FormulateInput
        name="owner"
        label="Who owns this drug?"
      />


      <FormulateInput
        name="company"
        label="What company developed this drug?"
      />

      <FormulateInput
        type="date"
        name="fda-approval"
        label="Date of FDA approval?"
      />

      <FormulateInput
        name="trial-phase"
        :options="{zero: 'Phase 0', one: 'Phase I', two: 'Phase II', three: 'Phase III', four: 'Phase IV'}"
        type="select"
        placeholder="Select an option"
        label="What clinical trial phase is this drug on?"
      />

      <FormulateInput
        type="submit"
        label="Create"
      />
    </FormulateForm>

    {{formValues}}
  </div>
</template>

<script>
export default {
    name: 'test-form',
    data: () => {
        return {
            formValues: {},
        }
    }
}
</script>

<style>

</style>