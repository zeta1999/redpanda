/**
 * Copyright 2020 Vectorized, Inc.
 *
 * Licensed as a Redpanda Enterprise file under the Redpanda Community
 * License (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * https://github.com/vectorizedio/redpanda/blob/master/licenses/rcl.md
 */

import {
  Coprocessor,
  RecordBatch,
  PolicyError,
} from "../../modules/public/Coprocessor";

class CoprocessorTest implements Coprocessor {
  globalId = BigInt(1);
  inputTopics = ["topicA"];
  policyError = PolicyError.Deregister;

  apply(record: RecordBatch): Map<string, RecordBatch> {
    return new Map([["test", record]]);
  }
}

export default CoprocessorTest;
