<template>
  <v-form class="mt-5">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      label="Nombre completo"
      required
      dark
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="Correo electrónico"
      required
      dark
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="phone"
      :error-messages="phoneErrors"
      label="Número de celular"
      required
      dark
      @input="$v.phone.$touch()"
      @blur="$v.phone.$touch()"
    ></v-text-field>
    <v-alert
      dense
      outlined
      type="warning"
      prominent
      border="left"
      dark
      class="mt-5"
    >
      Es importante que el celular sea válido, ya que a dicho número se enviará
      un mensaje de texto con las credenciales para acceder a los servicios que
      vas a adquirir.
    </v-alert>
  </v-form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, numeric, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    phone: { required, numeric, minLength: minLength(10) },
  },

  data: () => ({
    name: '',
    email: '',
    phone: '',
  }),

  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Campo requerido')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('El correo debe ser válido')
      !this.$v.email.required && errors.push('Campo requerido')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.numeric && errors.push('El valor debe ser numérico')
      !this.$v.phone.minLength && errors.push('Mínimo 10 dígitos')
      !this.$v.phone.required && errors.push('Campo requerido')
      return errors
    },
  },
}
</script>
