
/**
 * ```
 * {
 *   name: "WE_IceKingsHeartShard",
 *   icon: "Celeste\\UserInterface\\Icons\\Materials\\MatIconsIceKingsHeartShard_ua",
 *   rollovertextid: 151014,
 *   displaynameid: 151015,
 *   stackable: "",
 *   stacksize: 100,
 *   offertype: "eOfferNone",
 *   itemlevel: 0,
 *   sellable: "true",
 *   tradeable: "true",
 *   destroyable: "true",
 *   sellcostoverride: {
 *     capitalresource: {
 *       quantity: 50,
 *       type: "cCapResCoin",
 *     },
 *   },
 *   rarity: "cRarityRare",
 *   budgetcost: 1,
 *   contentpack: 1,
 *   event: "Winter".
 * }
 * ```
 */
export interface Material {
  name: string
  icon: string
  rollovertextid: number
  displaynameid: number
  stackable: string
  stacksize: number
  offertype: number
  itemlevel: number
  sellable: string
  tradeable: string
  destroyable: string
  sellcostoverride: {
    capitalresource: {
      quantity: number,
      type: string,
    },
  }
  rarity: string
  budgetcost: number
  contentpack: number
  event?: string
}

export interface Materials {
  timestamp: string
  data: {
    [index: string]: Material,
  }
}
