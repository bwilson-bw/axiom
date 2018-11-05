import React, { Component } from 'react';
import { Grid, GridCell } from '@brandwatch/axiom-components';
import { DataPoints, DataPoint } from '@brandwatch/axiom-charts';
export default class BlankCanvas extends Component {
  render() {
    return (
      <Grid responsive={ false }>
        <GridCell>
          <DataPoints size="2rem">
            <DataPoint color="paradise-lost" />
            <DataPoint color="critical-mass" />
          </DataPoints>
        </GridCell>
        <GridCell>
          <DataPoints size="2rem">
            <DataPoint color="serene-sea" />
            <DataPoint color="giant-leap" />
          </DataPoints>
        </GridCell>
        <GridCell>
          <DataPoints size="2rem">
            <DataPoint color="new-horizon" />
            <DataPoint color="primeval-soup" />
          </DataPoints>
        </GridCell>
      </Grid>
    );
  }
}
