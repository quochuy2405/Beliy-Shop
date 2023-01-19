export const dataTree = [
  {
    key: 'all_item',
    label: 'Tất cả sản phẩm',
    data: 'all_item',
    icon: 'pi pi-fw pi-th-large'
  },
  {
    key: 'jacket',
    label: 'Áo khoác - Jacket',
    data: 'jacket',
    icon: 'pi pi-fw pi-inbox',
    children: [
      {
        key: 'hoodie',
        label: 'Hoodie',
        data: 'hoodie'
      },
      {
        key: 'jacket',
        label: 'Jacket Ye yê',
        data: 'jacket'
      },
      {
        key: 'Bomber',
        label: 'Bomber',
        data: 'Bomber'
      }
    ]
  },
  {
    key: 'quan',
    label: 'Quần - Pants',
    data: 'quan',
    icon: 'pi pi-fw pi-inbox',
    children: [
      ,
      { key: '1-0', label: 'Quần nỉ', data: 'ni' },
      ,
      {
        key: '1-1',
        label: 'Quần Jean',

        data: 'jean'
      },
      {
        key: '1-2',
        label: 'Quần pants',
        data: 'pants'
      }
    ]
  },
  {
    key: 'tee',
    label: 'Áo - Tee',
    data: 'tee',
    icon: 'pi pi-fw pi-inbox',
    children: [
      ,
      { key: '1-0', label: 'Châu chấu', data: 'ni' },
      ,
      {
        key: '1-1',
        label: 'Nhền nhến',

        data: 'jean'
      },
      {
        key: '1-2',
        label: 'NgNgocMeoMeo',

        data: 'pants'
      }
    ]
  }
]
