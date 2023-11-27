export const validName = /(^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,16})([ -]{0,1}[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]{1,})?([ -]{0,1}[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]{1,})?([ -]{0,1}[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]{1,})?/

export const validEmail = /^(?<name>[a-zA-Z0-9.!#$%&*+=?^_`{|}~-]+)@(?<domain>[a-zA-Z0-9-]+)(?<tld>[.][a-zA-Z]{2,12})$/

export const validPhone = /^(?<phoneNumber>)(\d{3})[ -]?(\d{3})[ -]?(\d{3})$/

export const validMessage = /^\p{L}{3,}$/u