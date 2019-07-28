<template>
  <div class="md-checkbox">
    <input v-if="checked" :id="id" type="checkbox" checked="checked" />
    <input v-else :id="id" type="checkbox" />
    <label :for="id">{{initialTitle}}</label>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    id: { type: String, default: 'checkbox' },
    checked: { type: Boolean, default: false }
  },
  data() {
    return {
      initialTitle: this.title
    }
  }
}
</script>
<style lang="scss" scoped>
$md-checkbox-checked-color: rgb(51, 122, 183);
$md-checkbox-border-color: rgba(0, 0, 0, 0.54);
$md-checkbox-border-color-disabled: rgba(131, 48, 226, 0.26);
$md-checkbox-checked-color-disabled: rgba(0, 0, 0, 0.26);

$md-checkbox-margin: 1em 0;
$md-checkbox-size: 1.25em;
$md-checkbox-padding: 0.25em;
$md-checkbox-border-width: 1px;
$md-checkbox-border-radius: 0.125em;
$md-checkmark-width: 0.125em;
$md-checkmark-color: #fff;
$md-checkbox-label-padding: 0.75em;

.md-checkbox {
  position: relative;
  margin: $md-checkbox-margin;
  text-align: left;

  &.md-checkbox-inline {
    display: inline-block;
  }

  label {
    cursor: pointer;
    display: inline;
    line-height: $md-checkbox-size;
    vertical-align: top;
    clear: both;
    padding-left: 1px;
    &:not(:empty) {
      padding-left: $md-checkbox-label-padding;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
    }

    &:before {
      // box
      width: $md-checkbox-size;
      height: $md-checkbox-size;
      background: #fff;
      border: $md-checkbox-border-width solid $md-checkbox-border-color;
      border-radius: $md-checkbox-border-radius;
      cursor: pointer;
      transition: background 0.3s;
    }

    &:after {
      // checkmark
    }
  }

  input[type='checkbox'] {
    outline: 0;
    visibility: hidden;
    width: $md-checkbox-size;
    margin: 0;
    display: block;
    float: left;
    font-size: inherit;
    cursor: pointer;

    &:checked {
      + label:before {
        background:#ff2a6b;
        border: 0px;    
      }
      + label:after {
        $md-checkmark-size: $md-checkbox-size - 2 * $md-checkbox-padding;

        transform: translate(
            $md-checkbox-padding,
            ($md-checkbox-size / 2) - ($md-checkmark-size / 2.6)
          )
          rotate(-45deg);
        width: $md-checkmark-size;
        height: $md-checkmark-size / 2;

        border: $md-checkmark-width solid $md-checkmark-color;
        border-top-style: none;
        border-right-style: none;
      }
    }

    &:disabled {
      + label:before {
        border-color: $md-checkbox-border-color-disabled;
      }
      &:checked {
        + label:before {
          background: $md-checkbox-checked-color-disabled;
        }
      }
    }
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
