<template>
    <div>

        <FormulateForm
            v-model="formValues"
            >
            <FormulateInput
                name="name"
                label="What is your name?"
                validation="required"
            />
            <FormulateInput
                name="age"
                label="How old are you?"
                validation="required|number|max:120"
            />
            <FormulateInput
                type="submit"
                label="Sign up"
            />
        </FormulateForm>
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