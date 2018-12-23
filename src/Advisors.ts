/**
 * ```
 * {
 *   name: "Sesostris_L_IV",
 *   groupid: 121,
 *   age: 3,
 *   rarity: "legendary",
 *   icon: "Celeste\\UserInterface\\Icons\\Advisors\\AdvisorSesostris5_db",
 *   icontexturecoords: "0 0 1 1.0",
 *   rollovertextid: "",
 *   displaynameid: 150090,
 *   displaydescriptionid: 150091,
 *   sellcostoverride: {
 *     capitalresource: {
 *       quantity: 900,
 *       type: "cCapResCoin",
 *     },
 *   },
 *   minlevel: 40,
 *   itemlevel: 40,
 *   offertype: "eOfferCeleste1",
 *   techs: {
 *     tech: "Advisor_Sesostris_L",
 *   },
 *   sellable: "true",
 *   tradeable: "true",
 *   destroyable: "true",
 *   civilization: "Egypt",
 *   shortdescriptionid: "61615",
 *   specialborder: "true",
 * }
 * ```
 */
export interface Advisor {
  name: string
  groupid: number
  age: number
  rarity: string
  icon: string
  icontexturecoords: string
  rollovertextid: string
  displaynameid: number
  displaydescriptionid: number
  sellcostoverride: {
    capitalresource: {
      quantity: number
      type: string,
    },
  }
  minlevel: number
  itemlevel: number
  offertype: string
  techs: {
    tech: string,
  }
  sellable: string // FIXME should be `boolean`
  tradeable: string // FIXME should be `boolean`
  destroyable: string // FIXME should be `boolean`
  civilization?: string
  shortdescriptionid?: string // FIXME should be `number`
  specialborder?: string // FIXME should be `boolean`
}

export interface Advisors {
  timestamp: string
  data: {
    [index: string]: Advisor,
  }
}
