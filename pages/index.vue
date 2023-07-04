<template>
  <form>
    <FormKit
      type="text"
      help="Input Your Full Name"
      placeholder="Your full name"
      label="Name"
      value="rahman"
      prefix-icon="avatarMan"
      inner-class="custom-user"
      ><template #label="context">
        {{ context.label }}?<span>{{ context.help }}</span></template
      >
      <template #help></template
    ></FormKit>
    <FormKit type="select" />
    <FormKit type="textarea" />
  </form>
</template>
