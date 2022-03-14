import {
  registerSnapshot,
  runSnapshots,
  Snapshot,
} from 'pixels-catcher';
import { Text } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';

class AppSnapshot extends Snapshot {
  static snapshotName = 'SnapshotTest';

  renderContent() {
    return <Text>Test</Text>;
  }
}

registerSnapshot(AppSnapshot);

runSnapshots(appName);
