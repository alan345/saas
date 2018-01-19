
export const AddressTypes =
  [
    { value: 'shipping', label: 'Shipping' },
    { value: 'billing', label: 'Billing' },
  ]


export class Address {
  nameAddress: string = 'shipping';
  address = '';
  address2 = '';
  city = '';
  cities: string[] = [];
  state = '';
  zip = '';
  country = '';
}
