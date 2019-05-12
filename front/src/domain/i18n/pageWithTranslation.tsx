import { Component } from 'react'
import { NextAppContext } from 'next/app'
import { flatten } from 'lodash'

import { Namespace } from './Namespace'
import { I18nProvider } from './I18nProvider'
import { ComponentType } from 'react'

export const pageWithTranslation = (namespaces: Namespace | Namespace[]) => (
  Page: ComponentType,
) => {
  return class PageWithTranslation extends Component {
    public static async getInitialProps(appContext: NextAppContext) {
      let appProps = {}
      if (typeof (Page as any).getInitialProps === 'function') {
        appProps = await (Page as any).getInitialProps(appContext)
      }

      return {
        ...appProps,
        namespacesRequired: flatten([namespaces]),
      }
    }

    public render() {
      return (
        <I18nProvider namespaces={namespaces}>
          <Page />
        </I18nProvider>
      )
    }
  }
}
