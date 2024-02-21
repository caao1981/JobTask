import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { styles } from './style'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Skeleton } from '@mui/material'
import BoxComponent from 'components/Base/BoxComponent'
import Link from 'next/link'
import TypographyComponent from '../TypographyComponent'

export default function BreadCrumbsComponent({ breadcrumbs, showBreadCrumb }) {
  return (
    <>
      {showBreadCrumb ? (
        <BoxComponent sx={styles.container}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            {breadcrumbs &&
              breadcrumbs.map((item, index) => {
                return index < breadcrumbs.length - 1 ? (
                  <Link key={index} href={item.link} style={styles.linkStyle}>
                    {item.name}
                  </Link>
                ) : (
                  <TypographyComponent key={index} sx={styles.linkStyle}>
                    {item.name}
                  </TypographyComponent>
                )
              })}
          </Breadcrumbs>
        </BoxComponent>
      ) : (
        <BoxComponent sx={styles.skeleton}>
          <Skeleton variant="text" height="50px" />
        </BoxComponent>
      )}
    </>
  )
}
